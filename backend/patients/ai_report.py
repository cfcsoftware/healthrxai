import openai,json
from django.conf import settings


def extract_structured_data(raw_text):
    system_prompt = "You are a medical assistant. Extract structured health data from raw clinical conversation or medical notes."

    user_prompt = f"""
Here is raw data from a patient's medical file. Extract this information in JSON format:
- Health Score (estimate if needed)
- Previous health score (if available)
- Medical test results by body system (e.g., Liver: 4/22 out of range)
- Medications prescribed
- Body systems mentioned and whether tested or untested
- Doctor insights or flagged issues
- Percentile ranking (if context allows)

Raw Data:
{raw_text}
"""

    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt}
        ],
        temperature=0.5,
        max_tokens=1000
    )

    structured_text = response.choices[0].message["content"]
    try:
        return json.loads(structured_text)
    except json.JSONDecodeError:
        return {"error": "Could not parse GPT response", "text": structured_text}


def generate_health_report(structured_data):
    previous_score = structured_data.get("previous_health_score", 0)
    results = structured_data.get("test_results", {})
    untested = structured_data.get("untested_systems", [])

    prompt = f"""
Generate a patient health summary in **Markdown** format using the following structured data. The summary should include:

- **Health Score** (out of 100)
- **Improvement Value** (e.g., "+12")
- **Percentile Rank**
- **Short Paragraph Health Summary**
- **Body Systems Needing Improvement**: List each, with a reason and the number of out-of-range metrics.
- **Body Systems That Look Good**: List each, with a reason and the number of in-range metrics.
- **Untested Systems**: List each, with suggestions for next steps.

Format all sections clearly using Markdown headings, bullet points, and bold text where appropriate.

Previous Health Score: {previous_score}

Test Results:
"""


    for system, data in results.items():
        prompt += f"{system}: {data['out_of_range']} out of {data['total']} measurements out of range\n"

    if untested:
        prompt += "\nUntested systems:\n"
        prompt += "\n".join(untested)

    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a skilled medical assistant generating exact and correct health summaries and do not leave data null with the provided data."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.7,
        max_tokens=800
    )

    return response.choices[0].message["content"]
import openai
from django.conf import settings
import requests
import io
import fitz
import docx



class OpenAISOAPChatClient:
    def __init__(self):
        openai.api_key = settings.OPENAI_API_KEY
        self.conversation_history = []

    def add_message(self, role, content):
        self.conversation_history.append({'role': role, 'content': content})

    def get_response(self, prompt, model="gpt-4o", max_tokens=3000, temperature=0.7):
        self.add_message('user', prompt)
        
        messages = [{'role': 'system', 'content': 'You are a helpful, knowledgeable AI assistant which will Interpretate doctor and patient conversation. and also after that you are a helpful assistat which will generate SOAP notes based on the conversation.'}]
        messages.extend(self.conversation_history)

        response = openai.ChatCompletion.create(
            model=model,
            messages=messages,
            max_tokens=max_tokens,
            temperature=temperature,
        )

        answer = response.choices[0].message['content'].strip()
        self.add_message('assistant', answer)
        
        return answer

    def get_conversation_history(self):
        return self.conversation_history

    def set_conversation_history(self, history):
        self.conversation_history = history
        
        
        
        
        
        
class OpenAIChatClient:
    def __init__(self):
        openai.api_key = settings.OPENAI_API_KEY
        self.conversation_history = []

    def add_message(self, role, content):
        self.conversation_history.append({'role': role, 'content': content})

    def get_response(self, prompt, model="gpt-4o", max_tokens=3000, temperature=0.7):
        self.add_message('user', prompt)
        
        messages = [{'role': 'system', 'content': 'You are a only helpful, knowledgeable Medical sector AI assistant which will help doctors to understand the symptoms and other probems realted to patient and the knowledge for medicines.'}]
        messages.extend(self.conversation_history)

        response = openai.ChatCompletion.create(
            model=model,
            messages=messages,
            max_tokens=max_tokens,
            temperature=temperature,
        )

        answer = response.choices[0].message['content'].strip()
        self.add_message('assistant', answer)
        
        return answer

    def get_conversation_history(self):
        return self.conversation_history

    def set_conversation_history(self, history):
        self.conversation_history = history
        
        
        
class OpenAITitleClient:
    def __init__(self):
        openai.api_key = settings.OPENAI_API_KEY
        self.conversation_history = []

    def add_message(self, role, content):
        self.conversation_history.append({'role': role, 'content': content})

    def get_response(self, prompt, model="gpt-4o", max_tokens=3000, temperature=0.7):
        self.add_message('user', prompt)
        
        messages = [{'role': 'system', 'content': 'You are a helpful, knowledgeable AI assistant which will generate a short 5 words, relevant title for the following chats.'}]
        messages.extend(self.conversation_history)

        response = openai.ChatCompletion.create(
            model=model,
            messages=messages,
            max_tokens=max_tokens,
            temperature=temperature,
        )

        answer = response.choices[0].message['content'].strip()
        self.add_message('assistant', answer)
        
        return answer

    def get_conversation_history(self):
        return self.conversation_history

    def set_conversation_history(self, history):
        self.conversation_history = history
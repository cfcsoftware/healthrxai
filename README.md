# [HealthRx AI - React + Django] 

(https://healthrxai.com)

HealthRx AI – Powering the Future of Healthcare Operations

HealthRx AI is an enterprise-grade, AI-powered Hospital Management System (HMS) designed to digitize, automate, and optimize every aspect of hospital and clinic workflows. Built on modern cloud architecture with blockchain security, predictive AI, and modular scalability, it empowers healthcare institutions to deliver efficient, transparent, and patient-centric services.

A Complete Healthcare Operating System

HealthRx AI offers a comprehensive suite of modules to manage clinical, administrative, and financial operations. From patient registration, appointment scheduling, OPD/IPD management, to billing, pharmacy, lab & radiology integration, and EMR/EHR, the platform is designed for seamless interoperability. Additional tools like inventory control, diet & housekeeping, ambulance tracking, insurance processing, and HR & payroll ensure that every department is digitized and connected in real-time.

Each module works in harmony to reduce errors, save time, and improve both staff productivity and patient satisfaction. Customizable dashboards provide a 360° view of operations, while built-in audit trails ensure accountability.


🤖 AI-Powered Healthcare Workflows

HealthRx AI incorporates advanced artificial intelligence to bring intelligence into action:

AI-based disease prediction and diagnostics
NLP-enabled voice transcription for doctors
Smart discharge summaries
Predictive inventory restocking
Patient risk profiling
AI chatbots for scheduling and triaging


These features reduce administrative workload and enable faster, data-driven decisions that improve clinical outcomes and patient experience.


🔐 Enterprise-Grade Security & Compliance

Data security and regulatory compliance are at the core of HealthRx AI. The system uses blockchain-based encryption, role-based access controls, and immutable audit logs. It complies with HIPAA, GDPR, and India’s ABDM/NDHM framework, making it suitable for hospitals operating across different regions.


📲 Connected & Accessible Anywhere

HealthRx AI is built for mobility and accessibility:
Mobile apps for doctors, staff, and patients (Android & iOS)
Telemedicine with video consultation and e-prescriptions
WhatsApp reminders and patient communication
Integration with payment gateways (UPI, Stripe, Razorpay)
Smart robots for in-hospital medicine delivery


This 360° accessibility improves coordination between departments and strengthens engagement with patients, especially in hybrid or remote care models.


Full-Stack Seed project provided by **[App Generator](https://app-generator.dev/)** on top of **[Purity Dashboard](https://app-generator.dev/product/purity-dashboard/)** design from **[Creative-Tim](https://app-generator.dev/agency/creative-tim/)**. 
The backend logic is provided by a simple, `easy-to-extend` **Django API Server** that manages the Authentication flow (login, registration, logout) using `JSON Web Tokens` (JWT).

- 👉 [Saas Panel](https://healthrxai.com/saas/login) - Product Page
- 👉 [Hospital Admin Panel](https://cityhospital.healthrxai.com/) - LIVE Demo


## ✨ `Django API` Features

- Stack: : `Django` / `DRF` / **SQLite** 
- `Up-to-date dependencies`
- **DB Layer**: Django Native `ORM`, `SQLite` persistence
- **Auth**: JWT tokens managed via `PyJWT`
- [API Definition](https://docs.appseed.us/boilerplate-code/api-unified-definition) - the unified API structure implemented by this server


<br /> 

## ✨ How to use it

Being a full-stack product, the backend and the frontend should be compiled and started separately. 
Before starting to compile the product, make sure you have the following tools installed in the environment:

- [NodeJS](https://nodejs.org/en/) - version `14.x` or higher
- [GIT](https://git-scm.com/) - used to clone tjhe sources from Github
- [Python3](https://www.python.org/) - used in many tools

<br />

### 👉 Start the Frontend 

> **Step 1** - Once the project is downloaded, change the directory to `react-ui`. 

```bash
$ cd react-ui
```

<br >

> **Step 2** - Install dependencies via NPM or yarn

```bash
$ npm i
// OR
$ yarn
```

<br />

> **Step 3** - Start in development mode

```bash
$ npm run start 
// OR
$ yarn start
```

<br />

At this point, the app is available in the browser `localhost:3000` (the default address).


<br /> 

### 👉 Start the Backend Server 

> **Step 1** - Change the directory to `api-server-django`

```bash
$ cd api-server-django
```

<br >

> **Step 2** - Install dependencies using a `virtual environment`

```bash
$ # Virtualenv modules installation (Unix based systems)
$ virtualenv env
$ source env/bin/activate
$
$ # Virtualenv modules installation (Windows based systems)
$ # virtualenv env
$ # .\env\Scripts\activate
$
$ pip install -r requirements.txt
```

<br />

> **Step 3** - Setup the database 

```bash
$ python manage.py makemigrations
$ python manage.py migrate
```

<br />

> **Step 4** - Start the API server (development mode)

```bash
$ python manage.py runserver 5000
```

Use the API via `POSTMAN` or `Swagger Dashboard` at `localhost:5000`.

<br /> 

### 👉 Start API using `Docker` 

> **Step 1** - Change the directory to `api-server-django`

```bash
$ cd api-server-django
```

<br />

> **Step 2** - Start API using `docker-compose` command 

```bash
$ docker-compose up --build
```

<br />

# Order Management System - DevOps Project

A modern, containerized web application for managing orders with a complete DevOps pipeline. This project showcases DevOps best practices including CI/CD, containerization, automated testing, security scanning, and code quality checks.

## 🚀 Features

- **Modern Web UI**: Clean, card-based interface with sidebar navigation
- **Client-Side Storage**: All data stored in browser localStorage
- **Containerized**: Docker support for easy deployment
- **CI/CD Pipeline**: Automated testing, linting, security scanning, and Docker builds
- **Health Monitoring**: Built-in health check endpoint
- **Free & Open Source**: Uses only free tools and services

## 📋 Tech Stack

- **Backend**: Python 3.11 + Flask 3.x
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Storage**: Browser localStorage (client-side)
- **Containerization**: Docker
- **CI/CD**: GitHub Actions
- **Testing**: Pytest
- **Code Quality**: Black, Flake8, Pylint
- **Security**: Safety, Bandit

## 🏗️ Project Structure

```
Devops-Project/
├── app.py                 # Flask application
├── requirements.txt       # Production dependencies
├── requirements-dev.txt   # Development dependencies
├── Dockerfile            # Docker image configuration
├── docker-compose.yml    # Docker Compose configuration
├── pytest.ini           # Pytest configuration
├── .flake8              # Flake8 linting configuration
├── tests/               # Test suite
│   ├── test_app.py      # Unit tests
│   └── test_integration.py  # Integration tests
├── templates/           # HTML templates
├── static/             # CSS and JavaScript files
└── .github/workflows/  # CI/CD pipeline
    └── ci.yml          # GitHub Actions workflow
```

## 🛠️ Setup & Installation

### Prerequisites

- Python 3.11+
- Docker (optional, for containerized deployment)
- Git

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Devops-Project
   ```

2. **Create a virtual environment**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   pip install -r requirements-dev.txt
   ```

4. **Run the application**
   ```bash
   python app.py
   ```

5. **Access the application**
   - Open your browser and navigate to: `http://localhost:5000`

### Running Tests

```bash
# Run all tests
pytest

# Run with coverage report
pytest --cov=app --cov-report=html

# View coverage report
open htmlcov/index.html  # macOS
# or
xdg-open htmlcov/index.html  # Linux
```

### Code Quality Checks

```bash
# Format code with Black
black app.py tests/

# Lint with Flake8
flake8 app.py tests/

# Lint with Pylint
pylint app.py tests/
```

## 🐳 Docker Deployment

### Build and Run with Docker

```bash
# Build the Docker image
docker build -t order-management-app .

# Run the container
docker run -d -p 5000:5000 --name order-app order-management-app

# Check health
curl http://localhost:5000/health
```

### Using Docker Compose

```bash
# Build and start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 🔄 CI/CD Pipeline

The project includes a comprehensive GitHub Actions CI/CD pipeline that runs on every push and pull request:

### Pipeline Stages

1. **Code Quality Checks**
   - Black code formatting check
   - Flake8 linting
   - Pylint code analysis

2. **Testing**
   - Unit tests with pytest
   - Integration tests
   - Code coverage reporting

3. **Security Scanning**
   - Safety (dependency vulnerability scanning)
   - Bandit (security linting)

4. **Docker Build & Test**
   - Docker image build
   - Container health check

5. **Application Health Check**
   - Application startup test
   - Health endpoint verification

### Viewing Pipeline Results

- Go to the **Actions** tab in your GitHub repository
- Click on any workflow run to see detailed results
- All checks must pass before merging pull requests

## 📊 DevOps Best Practices Showcased

✅ **Continuous Integration (CI)**
- Automated testing on every commit
- Code quality checks
- Security scanning

✅ **Containerization**
- Docker support for consistent deployments
- Multi-stage builds for optimized images
- Health checks for container monitoring

✅ **Code Quality**
- Automated code formatting (Black)
- Linting (Flake8, Pylint)
- Test coverage reporting

✅ **Security**
- Dependency vulnerability scanning
- Security code analysis
- Container security best practices

✅ **Monitoring**
- Health check endpoint (`/health`)
- Application status monitoring

✅ **Infrastructure as Code**
- Dockerfile for application containerization
- Docker Compose for local development
- GitHub Actions for CI/CD

## 🧪 Testing

### Running Tests Locally

```bash
# Run all tests
pytest

# Run specific test file
pytest tests/test_app.py

# Run with verbose output
pytest -v

# Run with coverage
pytest --cov=app --cov-report=term-missing
```

### Test Coverage

The CI pipeline automatically generates coverage reports. Aim for >80% code coverage.

## 🔒 Security

- **Dependency Scanning**: Automated vulnerability checks using Safety
- **Code Security**: Security linting with Bandit
- **Container Security**: Minimal base images, non-root user (best practice)
- **Health Checks**: Built-in endpoint for monitoring

## 📝 API Endpoints

- `GET /` - Main application page
- `GET /health` - Health check endpoint (returns JSON with service status)

## 🚢 Deployment Options (Free Services)

This project can be deployed to various free hosting services:

1. **Render** (Free tier available)
   - Connect GitHub repository
   - Auto-deploy on push to main branch

2. **Railway** (Free tier available)
   - One-click deployment from GitHub

3. **Fly.io** (Free tier available)
   - Deploy Docker containers easily

4. **Heroku** (Limited free tier)
   - Easy deployment with Docker support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

The CI pipeline will automatically run all checks on your PR.

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

Garvit - DevOps Project Showcase

## 🎯 Learning Outcomes

This project demonstrates:
- Setting up CI/CD pipelines with GitHub Actions
- Containerizing applications with Docker
- Writing and running automated tests
- Implementing code quality checks
- Security best practices
- Infrastructure as Code concepts
- Modern DevOps workflows

---

**Note**: All tools and services used in this project are free and open source.


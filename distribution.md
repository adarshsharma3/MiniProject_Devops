# Work Division for 4 People (DevOps Focus)

## Person 1: Backend + DevOps (Containerization)

**Files:**
- `app.py`
- `requirements.txt`
- `Dockerfile`
- `docker-compose.yml`
- `.dockerignore`

**Tasks:**
- Implement Flask application with routes (`/`, `/health`)
- Create multi-stage Dockerfile
- Configure docker-compose.yml with health checks
- Set up `.dockerignore`
- Manage production dependencies
- Configure container health checks
- Optimize Docker builds
- Test container builds locally

---

## Person 2: Frontend + DevOps (CI/CD Pipeline)

**Files:**
- `templates/orders.html`
- `static/script.js`
- `static/style.css`
- `.github/workflows/ci.yml`

**Tasks:**
- Design and implement HTML/CSS/JavaScript
- Implement order management functionality
- Create CI/CD pipeline with GitHub Actions:
  - Lint job (Black, Flake8, Pylint)
  - Test job (pytest with coverage)
  - Security job (Safety, Bandit)
  - Docker build job
  - Health check job
- Configure pipeline triggers and workflows
- Set up pipeline notifications
- Test pipeline execution

---

## Person 3: DevOps + Automation

**Files:**
- `Makefile`
- `pytest.ini`
- `.flake8`
- `requirements-dev.txt`
- DevOps documentation

**Tasks:**
- Create Makefile with automation commands:
  - `make install`, `make test`, `make lint`, `make format`
  - `make docker-build`, `make docker-run`, `make docker-stop`
  - `make clean`
- Configure pytest (`pytest.ini`)
- Set up code quality tools (`.flake8`)
- Manage development dependencies
- Create automation scripts
- Write DevOps documentation
- Set up local development environment

---

## Person 4: Testing + DevOps (Quality Assurance)

**Files:**
- `tests/test_app.py`
- `tests/test_integration.py`
- `tests/__init__.py`
- `project.md`
- `demonstration.md`
- Testing documentation

**Tasks:**
- Write unit tests (Flask routes, health endpoint, errors)
- Write integration tests (app startup, end-to-end)
- Ensure test coverage above 80%
- Integrate tests with CI/CD pipeline
- Set up test reporting in pipeline
- Write project documentation (`project.md`)
- Write demonstration guide (`demonstration.md`)
- Create test reports and coverage analysis
- Verify all DevOps practices are documented

---

## DevOps Distribution Summary

- **Person 1**: Containerization (Docker)
- **Person 2**: CI/CD Pipeline (GitHub Actions)
- **Person 3**: Automation & Tooling (Makefile, configs)
- **Person 4**: Testing & Quality (Tests, documentation)

Each person handles DevOps work plus their core responsibility.

---

## Collaboration Points

- **Backend and Frontend**: Coordinate on data formats and API contracts
- **DevOps (Person 1) and Backend**: Work on container requirements and environment setup
- **DevOps (Person 2) and Frontend**: Work on static file serving and build process
- **DevOps (Person 3) and All**: Provide automation tools and development environment
- **QA and All**: Review all code, write documentation, ensure quality standards
- **All Team Members**: Participate in code reviews and DevOps best practices


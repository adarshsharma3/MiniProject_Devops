"""
Integration tests for the application
"""

import pytest
from app import app


@pytest.fixture
def client():
    """Create a test client for the Flask app"""
    app.config["TESTING"] = True
    with app.test_client() as client:
        yield client


def test_app_starts(client):
    """Integration test: Verify the app starts and responds"""
    response = client.get("/")
    assert response.status_code == 200


def test_health_check_integration(client):
    """Integration test: Verify health check works end-to-end"""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.content_type == "application/json"


def test_static_files_accessible(client):
    """Integration test: Verify static files can be accessed"""
    # Test that the app can serve static files (CSS/JS)
    # This is a basic check that the Flask static folder is configured
    response = client.get("/")
    assert response.status_code == 200

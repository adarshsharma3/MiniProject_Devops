"""
Unit tests for the Flask application
"""

import pytest
from app import app


@pytest.fixture
def client():
    """Create a test client for the Flask app"""
    app.config["TESTING"] = True
    with app.test_client() as client:
        yield client


def test_index_route(client):
    """Test that the index route returns 200 status code"""
    response = client.get("/")
    assert response.status_code == 200
    assert b"Order Management" in response.data or b"Orders" in response.data


def test_health_check(client):
    """Test the health check endpoint"""
    response = client.get("/health")
    assert response.status_code == 200
    data = response.get_json()
    assert data["status"] == "healthy"
    assert data["service"] == "order-management-app"
    assert "version" in data


def test_health_check_structure(client):
    """Test health check response structure"""
    response = client.get("/health")
    assert response.is_json
    data = response.get_json()
    assert isinstance(data, dict)
    assert "status" in data
    assert "service" in data
    assert "version" in data


def test_404_error(client):
    """Test that non-existent routes return 404"""
    response = client.get("/non-existent-route")
    assert response.status_code == 404

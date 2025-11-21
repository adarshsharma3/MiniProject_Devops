from flask import Flask, render_template, jsonify

# Initialise Flask App
app = Flask(__name__)


# Route to serve the main page (all data handling is done client-side with localStorage)
@app.route("/")
def index():
    return render_template("orders.html")


# Health check endpoint for monitoring and CI/CD
@app.route("/health")
def health():
    return (
        jsonify(
            {"status": "healthy", "service": "order-management-app", "version": "1.0.0"}
        ),
        200,
    )


# run the app
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

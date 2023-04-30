from flask import Flask, render_template

STATIC = "static/build/static"
TEMPLATE = "static/build"
app = Flask(__name__, static_folder=STATIC, template_folder=TEMPLATE)


@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(host="localhost", port=8000)

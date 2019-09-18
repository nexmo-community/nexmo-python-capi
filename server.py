import os
from dotenv import load_dotenv
from flask import Flask, jsonify, request, render_template
import nexmo

app = Flask(__name__)
load_dotenv()


def make_capi_request(api_uri):
    nexmo_client = nexmo.Client(
        application_id=os.getenv("APPLICATION_ID"), private_key=os.getenv("PRIVATE_KEY")
    )
    try:
        response = nexmo_client._jwt_signed_get(request_uri=api_uri)
    except nexmo.errors.ClientError:
        response = {}

    return jsonify(response)


@app.route("/")
def index():  # Index page structure
    return render_template("index.html")


@app.route("/conversations")
def conversations():  # List of conversations
    return make_capi_request(api_uri="/beta/conversations")


@app.route("/conversation")
def conversation():
    cid = request.args.get("cid")
    return make_capi_request(api_uri=f"/beta/conversations/{cid}")


@app.route("/user")
def user():  # User detail
    uid = request.args.get("uid")
    return make_capi_request(api_uri=f"/beta/users/{uid}")


@app.route("/events")
def events():
    cid = request.args.get("cid")
    return make_capi_request(api_uri=f"/beta/conversations/{cid}/events")

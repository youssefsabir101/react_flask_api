import openai
openai.api_key = "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"
from flask import Flask, request
from flask_cors import cross_origin
app = Flask(__name__)

@app.route("/ask", methods=["GET"])
@cross_origin()
def ask():
    
    completions = openai.Completion.create(
        engine="text-davinci-003",
        prompt=request.args['q'],
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.7,
    )
    message = completions.choices[0].text


    return {"answers" : message}


if __name__ == "__main__":
    app.run(debug=True)




#   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
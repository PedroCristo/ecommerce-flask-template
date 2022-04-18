import os
import json
from flask import Flask, render_template


app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/shop")
def shop():
     data = []
     with open("data/products.json", "r") as json_data:
          data = json.load(json_data)
     return render_template("shop.html", page_title="Shop", products=data)

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/shop_single")
def shop_single():
      data = []
      with open("data/products.json", "r") as json_data:
          data = json.load(json_data)
      return render_template("shop_single.html", page_title="Shop Single", products=data)

@app.route("/watches")
def watches():
       data = []
       with open("data/watches.json", "r") as json_data:
           data = json.load(json_data)
       return render_template("watches.html", page_title="Watches", watches=data)
 

if __name__ == "__main__":
    app.run(
        host=os.environ.get("IP", "0.0.0.0"),
        port=int(os.environ.get("PORT", "5000")),
        debug=True
)
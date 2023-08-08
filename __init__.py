from flask import Flask, render_template, request, redirect
import datetime

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/counting", methods=["POST"])
@app.route("/")
def counting():
    end_date = request.form['end_date']
    beginning_date = request.form['beginning_date']
    if end_date == "" and beginning_date == "" or end_date == "" and beginning_date != "" or datetime.datetime.strptime(end_date, '%Y-%m-%d') < datetime.datetime.now():
        return redirect("/")
    elif end_date != "" and beginning_date == "":
        return render_template('without_percentage.html', end_date=end_date)
    
    end_date_object = datetime.datetime.strptime(end_date, '%Y-%m-%d')
    beginning_date_object = datetime.datetime.strptime(beginning_date, '%Y-%m-%d')

    if end_date_object > beginning_date_object:
        return render_template('with_percentage.html',end_date=end_date, beginning_date=beginning_date)
    else:
        return redirect("/")
    



if __name__ == "__main__":
    app.run(debug=True)
from config import app


@app.route('/')
def home():
    return 'ello mate'

if __name__ == '__main__':
    app.run(port=5555, debug=True)
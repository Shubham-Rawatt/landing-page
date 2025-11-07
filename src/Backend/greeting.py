

def greet(name):
    return f"Hello, {name}! Welcome to my GitHub landing page project."

def repeat_greeting(name, times):
    """Repeat greeting multiple times"""
    for _ in range(times):
        print(greet(name))

def farewell(name):
    return f"Goodbye, {name}! See you soon."

def math_examples():
    """Some dummy calculations to increase line count"""
    results = []
    for i in range(1, 21):
        results.append(i * i)
        results.append(i + 100)
    return results

def main():
    user = "Shubham-Rawatt"
    repeat_greeting(user, 3)
    print(farewell(user))
    print("Some math examples:", math_examples())

if __name__ == "__main__":
    main()


# SamModal

SAM React component for displaying a Modal dialogue.

## Example usage

```
state = {
  isVisible: true
};
hideCb = () => { this.setState({isVisible: false}); }

// render function inside React component
render() {
  const html: string = "<h1>Hello World</h1>"

  return (
    <div>
    {
      isVisible && <SamModal htmlContent={html} hideCb={ hideCb } />
    }
    </div>
  );
}
```

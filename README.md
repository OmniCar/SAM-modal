# SamModal

[![Greenkeeper badge](https://badges.greenkeeper.io/OmniCar/SAM-modal.svg)](https://greenkeeper.io/)

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
    {isVisible &&
        <SamModal
          htmlContent={html}
          hideCb={ hideCb }
          widthPct={40}
          heightPct={40} />
    }
    </div>
  );
}
```

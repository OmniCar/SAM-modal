import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './SamModal.css'

export interface SamModalProps {
  htmlContent?: string
  hideCb: () => void
  heightPct?: number
  widthPct?: number
}

class SamModal extends React.Component<SamModalProps, {}> {
  public componentDidMount() {
    document.addEventListener('keydown', e => this.handleKeyPress(e), false)
  }

  public componentWillUnmount() {
    document.removeEventListener('keydown', this.props.hideCb, false)
  }

  // do not render modal inside app react DOM
  public render() {
    const { htmlContent, hideCb, heightPct, widthPct, children } = this.props

    const distVerticalPct: number = (100 - (heightPct ? heightPct : 60)) / 2 // defaults to 60
    const distHorizontalPct: number = (100 - (widthPct ? widthPct : 60)) / 2 // defaults to 60

    return ReactDOM.createPortal(
      <div className="Modal">
        <div className="Modal__overlay" onClick={this.handleMouseClick}>
          <ReactCSSTransitionGroup
            transitionName="modal"
            transitionAppear={true}
            transitionAppearTimeout={0}
            transitionEnterTimeout={0}
            transitionLeaveTimeout={0}>
            <div
              className="Modal__box"
              style={{
                top: `${distVerticalPct}%`,
                bottom: `${distVerticalPct}%`,
                left: `${distHorizontalPct}%`,
                right: `${distHorizontalPct}%`,
              }}>
              <div className="Modal__close">
                <i className="Modal__close__icon fa fa-times" onClick={hideCb} />
              </div>
              <div className="Modal__content">
                {children}
                {htmlContent && (
                  <div className="Modal__content--html-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
                )}
              </div>
            </div>
          </ReactCSSTransitionGroup>
        </div>
      </div>,
      document.getElementById('ModalPortal')!,
    )
  }

  // only respond to click on element (avoid bubbling through foreground layers)
  private handleMouseClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget === e.target) {
      this.props.hideCb()
    }
  }

  // only respond to ESC press
  private handleKeyPress = (e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      this.props.hideCb()
    }
  }
}

export default SamModal as any

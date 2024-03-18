import React from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

const opacityAnim = {
  "0%": { opacity: 0.5 },
  "100%": { opacity: 1 },
};

const bounceAnim = {
  "0%": { transform: "translateY(0px)" },
  "33%": { transform: "translateY(-5px)" },
  "66%": { transform: "translateY(5px)" },
  "100%": { transform: "translateY(0px)" },
};

const styles = StyleSheet.create({
  Notifications: {
    border: "dashed 2px #e0354b",
    padding: "1rem",
    position: "absolute",
    top: "3em",
    right: 0,
    "@media (max-width: 900px)": {
      width: "100%",
      padding: "0px",
      fontSize: 20,
      position: "relative",
      right: 0,
      left: 0,
      border: "none",
    },
  },

  menuItem: {
    textAlign: "right",
    position: "absolute",
    top: 0,
    right: 0,
    ":hover": {
      cursor: "pointer",
      animationName: [opacityAnim, bounceAnim],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3",
    },
  },

  // menuItem: {
  //   hover: {
  //     cursor: "pointer",
  //     animationName: [opacityAnim, bounceAnim],
  //     animationDuration: "1s, 0.5s",
  //     animationIterationCount: "3",
  //   },
  // },

  "notification-header": {
    display: "flex",
    justifyContent: "space-between",
  },

  "flex-area": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  ul: {
    "@media (max-width: 900px)": {
      padding: 0,
    },
  },
  button: {
    "@media (max-width: 900px)": {
      position: "relative",
      float: "right",
    },
  },

  // mobile: {
  //   "@media (max-width: 375px)": {
  //     display: "block",
  //     height: "100vh",
  //     width: "100vw",
  //     marginLeft: "auto",
  //     marginRight: "auto",
  //     border: "none",
  //     fontSize: "20px",
  //     padding: "0",
  //   },
  // },
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.displayDrawer ? (
          <div className={css(styles["flex-area"])}>
            <div className={css(styles.menuItem)}>
              <p>Your notifications</p>
            </div>
            <div className={css(styles.Notifications, styles.mobile)}>
              <ul className={css(styles.ul)}>
                {this.props.listNotifications &&
                this.props.listNotifications.length > 0 ? (
                  this.props.listNotifications.map(
                    ({ id, html, type, value }) => (
                      <NotificationItem
                        key={id}
                        markAsRead={this.markAsRead}
                        type={type}
                        value={value}
                        html={html}
                      />
                    )
                  )
                ) : (
                  <div className={css(styles["notification-header"])}>
                    <NotificationItem value="No new notification for now" />
                    <button
                      className={css(styles.button)}
                      aria-label="Close"
                      onClick={console.log("Close button has been clicked")}
                    >
                      <img
                        style={{ display: "inline" }}
                        src={closeIcon}
                        alt="Close"
                        width="15px"
                      />
                    </button>
                  </div>
                )}
              </ul>
            </div>
          </div>
        ) : (
          <div className={css(styles.menuItem)}>
            <p>Your notifications</p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;

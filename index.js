// To run the javascript cdes after DOM have been loaded.
document.addEventListener("DOMContentLoaded", () => {
    // Assign elements to be used to a constant.
    const markAllBtn = document.getElementById("markAll");
    const unreadCounter = document.getElementById("notificationCount");
    const unreadNotifications = document.querySelectorAll(".notification.unread");

    // Clear all unread notifications when the marl all button is clicked.
    markAllBtn.addEventListener("click", () => {
        unreadNotifications.forEach(unreadNotification => {
            unreadNotification.classList.remove("unread");
        });
        unreadCounter.textContent = "0";
    });

    // Remove unreadd status from notifications when clicked.
    unreadNotifications.forEach(unreadNotification => {
        unreadNotification.addEventListener("click", () => {
            unreadNotification.classList.remove("unread");
            updateNotificationCount()
        });
    });

    updateNotificationCount();

});

// Function to update the unread notifications counter.
function updateNotificationCount() {
    const currentCount = document.querySelectorAll(".notification.unread").length;
    document.getElementById("notificationCount").textContent = currentCount;

};

let serverCount = 0;

function provision() {
    serverCount = 1;
    updateStatus();
}

function scale() {
    if (serverCount === 0) {
        alert("Please provision the website first!");
        return;
    }

    serverCount = 3;
    updateStatus();
}

function resetDemo() {
    serverCount = 0;
    updateStatus();
}

function updateStatus() {
    document.getElementById("status").innerText =
        serverCount > 0
            ? "Status: Provisioned"
            : "Status: Not Provisioned";

    document.getElementById("capacity").innerText =
        "Server Capacity: " + serverCount +
        (serverCount === 1 ? " server" : " servers");

    document.getElementById("message").innerText =
        serverCount === 0
            ? "No servers running"
            : serverCount === 1
                ? "1 server running"
                : serverCount + " servers running";
}

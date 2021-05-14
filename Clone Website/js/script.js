var toggleProfile = document.getElementById("profileContainer");
var toggleDot = document.getElementById("dropDotContainer");
var toggleSidePanel = document.getElementById("sidePanel");


// Toggle the Side Panel
function openSidePanel() {
    document.getElementById("sidePanel").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,.4)";
    toggleDot.style.height = "0px";
    toggleProfile.style.height = "0px";
};
function closeSidePanel() {
    document.getElementById("sidePanel").style.width = "0px";
    document.body.style.backgroundColor = "white";
};

// Toggle the Dot Container
function openDot() {
    if (toggleDot.style.height == "0px") {
        toggleDot.style.height = "70%";
        toggleProfile.style.height = "0px";
        toggleSidePanel.style.width = "0px";
        document.body.style.backgroundColor = "white";
    } else {
        toggleDot.style.height = "0px";
    }  
};

// Toggle the Profile Container

function openProfile() {
    if (toggleProfile.style.height == "0px") {
        toggleProfile.style.height = "70vh";
        toggleDot.style.height = "0px";
        toggleSidePanel.style.width = "0px";
        document.body.style.backgroundColor = "white";
    } else {
        toggleProfile.style.height = "0px";
    }  
};
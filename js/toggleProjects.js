document.getElementById("ll5").onclick = () => {
  let ll5Info = document.getElementById("ll5Info");

  if (ll5Info.className === "hide") {
    $("#ll5Info").removeClass("hide").addClass("show");
    $("#ll5").text("Close Project");
  } else {
    $("#ll5Info").removeClass("show").addClass("hide");
    $("#ll5").text("View Project");
  }
};

document.getElementById("NOTscarebnb").onclick = () => {
  let scareInfo = document.getElementById("scareInfo");

  if (scareInfo.className === "hide") {
    $("#scareInfo").removeClass("hide").addClass("show");
  } else {
    $("#scareInfo").removeClass("show").addClass("hide");
  }
};

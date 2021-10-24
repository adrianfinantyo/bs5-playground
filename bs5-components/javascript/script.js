$(document).ready(() => {
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );

  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#navbar-example",
  });

  // var toastElList = [].slice.call(document.querySelectorAll(".toast"));
  // var toastList = toastElList.map(function (toastEl) {
  //   return new bootstrap.Toast(toastEl, option);
  // });

  $("#liveToastBtn").click(function () {
    $("#liveToast").toast("show");
  });

  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );

  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  var exampleEl = document.getElementById("example");

  var tooltip = new bootstrap.Tooltip(exampleEl, options);
});

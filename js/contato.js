(function () {
  emailjs.init("qP21icx6TJV0DK3D0");
})();

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_yfv1mbg",
      "template_gl222o3",
      this
    )
    .then(() => {
      alert("Mensagem enviada com sucesso ✅");
      form.reset();
    })
    .catch((error) => {
      alert("Erro ao enviar mensagem ❌");
      console.log(error);
    });
});

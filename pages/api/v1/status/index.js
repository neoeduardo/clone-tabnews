function status(request, response) {
  response.status(200).json({ mensagem: "sushi é melhor que cuscuz" });
}

export default status;

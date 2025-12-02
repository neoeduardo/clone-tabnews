const { exec } = require("node:child_process");

function checkPostgres() {
  exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);
  function handleReturn(stdout) {
    const wordPattern = "accepting connections";
    if (stdout.search(wordPattern) === -1) {
      process.stdout.write(".");
      checkPostgres(); // Recursividade
      return;
    }

    console.log("\n🟢 Postgres está pronto e aceitando conexões.\n");
  }
}

process.stdout.write("\n \n🔴 aguardando postgres aceitar conexões");
checkPostgres();

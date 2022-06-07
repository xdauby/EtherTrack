
(async () => {
    const rawResponse = await fetch('http://localhost:3000/Balance', {
      method: 'POST',
      headers : {'Content-Type': 'application/json'},
      body: JSON.stringify({walletAddress : '0x3866DaD7fb9672e54daD3e4378aEd0Ed3B747866'})
    });
    const content = await rawResponse.json();

    console.log(content);
  })();
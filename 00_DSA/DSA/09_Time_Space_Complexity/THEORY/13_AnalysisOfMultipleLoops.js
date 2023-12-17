function fun(n) {
  for (let i = 0; i < n; i++) {
    // TC: Θ(n)
  }
  for (let i = 0; i < n; i * 2) {
    // TC: Θ(logn)
  }
  for (let i = 0; i < 100; i++) {
    // TC: Θ(1)
  }
}

// Total TC: Θ(n) + Θ(logn) + Θ(1) => Θ(n)

function fun2(n) {
  for (let i = 0; i < n; i++) {
    // TC: Θ(n)
    for (let j = 0; j < n; j * 2) {
      // TC: Θ(logn)
    }
  }
}

// Total TC: Θ(n) * Θ(logn) = Θ(nlogn);

function fun3(n) {
  for (let i = 0; i < n; i++) {
    // TC: Θ(n)
    for (let j = 0; j < n; i++) {
      // TC: Θ(n)
    }
  }
}

// Total TC: Θ(n) * Θ(n) = Θ(n**2);

function fun4(n, m) {
  for (let i = 0; i < n; i++) {
    // TC: Θ(n)
    for (let j = 0; j < n; j * 2) {
      // TC: Θ(logn)
    }
  }
  for (let i = 0; i < m; i++) {
    // TC: Θ(n)
    for (let j = 0; j < m; j++) {
      // TC: Θ(logn)
    }
  }
}

// Total TC: Θ(nlogn) * Θ(m**2) = Θ(nlogn + m**2);

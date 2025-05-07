function Hero() {
    return (
      <section className="hero-section">
        <div className="hero-content">
          <h1>Добро пожаловать в СантехМаркет</h1>
          <p>Лучшие решения для вашего дома по доступным ценам</p>
          <a href="/catalog" className="cta-btn">Перейти в каталог</a>
        </div>
        <div className="hero-image">
          <img src="/images/hero-home.jpg" alt="Современная сантехника" />
        </div>
      </section>
    );
  }
  
  export default Hero;
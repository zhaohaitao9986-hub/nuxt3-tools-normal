<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>多功能在线工具大全</h1>
        <p>集合多种免费在线工具，助力开发者和用户提升工作效率。</p>
      </div>
    </section>

    <!-- Features Section -->
    <section class="home-inner features">
      <h2>我们的特色功能</h2>
      <div class="features-grid">
        <div class="feature-item">
          <h3>JSON格式化工具</h3>
          <p>轻松美化和验证您的JSON代码，提升数据处理效率。</p>
        </div>
        <div class="feature-item">
          <h3>Base64编码/解码</h3>
          <p>快速进行Base64编码和解码，确保数据安全传输。</p>
        </div>
        <div class="feature-item">
          <h3>URL编码/解码</h3>
          <p>处理和转换URL编码的数据，确保链接正常工作。</p>
        </div>
        <div class="feature-item">
          <h3>更多工具</h3>
          <p>我们还提供其他多种实用工具，满足您的各种需求。</p>
        </div>
      </div>
    </section>

    <!-- Tools Section -->
    <section class="home-inner tools">
      <h2>热门工具</h2>
      <div class="tools-grid">
        <home-nav v-for="tool in tools" :key="tool.name" :tool="tool" />
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="home-inner testimonials">
      <h2>用户评价</h2>
      <div class="testimonials-grid">
        <div class="testimonial-item" v-for="testimonial in testimonials" :key="testimonial.name">
          <p class="testimonial-quote">"{{ testimonial.quote }}"</p>
          <p class="testimonial-name">- {{ testimonial.name }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    pageData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      tools: this.pageData?.common_content?.tools || [],
      testimonials: this.pageData?.common_content?.testimonials || [],
    };
  }
};
</script>

<style scoped>
.home {
  /* padding: 20px; */
}

.hero {
  background-color: #007bff;
  color: white;
  padding: 50px 20px;
  text-align: center;
}

.hero-content h1 {
  font-size: 48px;
  margin-bottom: 10px;
}

.hero-content p {
  font-size: 24px;
  margin-bottom: 20px;
}

.home-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.cta-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: white;
  color: #007bff;
  font-size: 18px;
  border-radius: 5px;
  text-decoration: none;
}

.cta-button:hover {
  background-color: #0056b3;
  color: white;
}

.features,
.tools,
.testimonials {
  margin-top: 40px;
}

.features-grid,
.tools-grid,
.testimonials-grid {
  display: flex;
  flex-wrap: wrap;
}

.feature-item,
.testimonial-item {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin: 10px;
  flex-basis: 22%;
  text-align: center;
}

.feature-item h3,
.testimonial-name {
  margin-top: 0;
  color: #007bff;
}

.testimonial-quote {
  font-style: italic;
  margin-bottom: 10px;
}

@media screen and (max-width:720px) {
  .home-inner {
    max-width: 96%;
    margin: 0 auto;
  }

  .features-grid,
  .tools-grid,
  .testimonials-grid {
    display: block;

  }

}
</style>

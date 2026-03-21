<template>
    <div class="contact">
        <section class="contact-hero">
            <h1>联系我们</h1>
            <p>如果您有任何问题、建议或反馈，请随时与我们联系。我们非常乐意听取您的意见。</p>
        </section>

        <section class="contact-details">
            <h2>联系方式</h2>
            <p>您可以通过以下方式与我们联系：</p>
            <ul>
                <li><strong>邮箱：</strong>2907532325@qq.com</li>
                <li><strong>地址：</strong>上海市-嘉定区</li>
            </ul>

            <h2>社交媒体</h2>
            <p>关注我们的社交媒体，获取最新的工具更新和技术文章：</p>
        </section>
    </div>
</template>
  
<style scoped>
.contact {
    padding: 20px;
}

.contact-hero {
    text-align: center;
    margin-bottom: 40px;
}

.contact-hero h1 {
    font-size: 36px;
    color: #007bff;
    margin-bottom: 10px;
}

.contact-hero p {
    font-size: 20px;
    color: #555;
}

.contact-details {
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
}

.contact-details h2 {
    font-size: 28px;
    color: #333;
    margin-top: 40px;
}

.contact-details p {
    font-size: 18px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
}

.contact-details ul {
    list-style-type: none;
    padding-left: 0;
}

.contact-details ul li {
    font-size: 18px;
    color: #555;
    margin-bottom: 10px;
}

.social-media {
    display: flex;
    flex-direction: column;
}

.social-media a {
    color: #007bff;
    text-decoration: none;
    font-size: 18px;
}

.social-media a:hover {
    text-decoration: underline;
}
</style>
  
<script setup lang="ts">
const slug = useRoute().params.slug as string;

const { data } = await useAsyncData(slug, () =>
  queryContent(`/blog/${slug}`).findOne()
);

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Blog post not found",
  });
}
</script>

<template>
  <div class="single blog blog-single py-32">
    <Head>
      <Title>{{ data?.title }}</Title>
      <Meta name="description" :content="data?.excerpt" />
    </Head>
    <article class="container mx-auto" v-if="data">
      <!-- Blog Header  -->
      <header class="mx-auto max-w-3xl mb-10">
        <h1 class="text-center lg:!text-5xl">{{ data.title }}</h1>
        <!-- Post Meta  -->
        <div class="flex justify-center mt-5">
          <div class="inline-flex">
            <Icon name="heroicons:calendar" class="mr-2" size="16" />
            <span>{{ formatDate(data.date) }}</span>
          </div>
          <div class="inline-flex ml-4">
            <Icon name="heroicons:user" class="mr-2" size="16" />
            <span>Jahid</span>
          </div>
        </div>
        <!-- ./ Post Meta   -->
        <!-- Post Thumbnail -->
        <div
          class="relative mt-5 h-[300px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <NuxtImg
            :src="data.image"
            :alt="data.title"
            class="absolute w-full h-full object-cover"
            width="334px"
            height="188px"
            loading="lazy"
          ></NuxtImg>
        </div>
        <!-- ./ Post Thumbnail  -->
      </header>
      <!-- ./ Blog Header  -->

      <!-- Blog Content  -->
      <div class="mx-auto max-w-3xl">
        <Prose>
          <ContentRenderer :value="data" class="content blog" />
        </Prose>
      </div>
      <!-- ./ Blog Content  -->
    </article>
  </div>
</template>

<style></style>

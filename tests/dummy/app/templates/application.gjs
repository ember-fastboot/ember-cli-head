import pageTitle from 'ember-page-title/helpers/page-title';
import HeadLayout from 'ember-cli-head/components/head-layout';

<template>
  <HeadLayout/>
  {{pageTitle "Dummy"}}

  <h2 id="title">Welcome to Ember</h2>

  {{outlet}}
</template>

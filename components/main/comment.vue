<template>
    <el-card class="comment">
        <div class="comment-header">
            <small>Person Name</small>
            <small>
          <i class="el-icon-time"></i>
          {{ new Date().toLocaleString() }}
            </small>
        </div>
        <div class="comment-text">
            Lorem ipsum dolor sit amet.
        </div>
    </el-card>
</template>

<script>
export default {
    props: ['comments']
}
</script>

<style lang="scss" scoped>
.comment {
    margin-bottom: 1rem;

}
.comment-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}
.comment-text {
    white-space: pre-line;
}
</style>
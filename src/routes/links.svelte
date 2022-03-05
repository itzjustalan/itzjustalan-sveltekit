<script lang="ts">
  export let links: any
</script>

<div>
    <h1>
      Links 
      {#if links}
        {#each links as link}
          <div>
            <a href={link.link}>{link.name}</a>
          </div>
        {/each}
      {/if}
    </h1>
</div>

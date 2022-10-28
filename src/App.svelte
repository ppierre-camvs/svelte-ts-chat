<script lang="ts">
  import { Message } from "./models/message";
  import { MessageService } from "./services/message.service";

  let ms = new MessageService();
  let messages = new Array<Message>();

  ms.getAllMessages().subscribe((msg) => {
    let tabTempo = new Array<Message>();
    msg.forEach((msg) => {
      let m = new Message("0", msg.pseudo, msg.time, msg.contenu);
      tabTempo.push(m);
      console.log(messages);
    });
    messages = tabTempo;
  });

  function envoyer(){
    console.log("envoi");
    ms.addMessage(new Message("dsd", "Philippe", "10:12:13", "Interro!!"));
  }

</script>

<main class="chatbox">
    <button on:click="{envoyer}">Envoyer</button> <br>
  {#if messages != null}
    {#each messages as msg}
      {msg.pseudo}  ({msg.time}) : "  {msg.contenu} <br/>
    {/each}
  {/if}
</main>

<style>

  .chatbox {
    background-color: dimgrey;
    text-align: left;
    width: 700px
  }


</style>

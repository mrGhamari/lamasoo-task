<template>
  <div class="person-info mt-8">
    <div class="flex flex-row items-start">
      <div class="basis-1/4">
        <img
          :src="person.image"
          alt="Character Image"
          height="100%"
          class="rounded-[16px] h-full"
        />
      </div>
      <div class="ml-10 basis-3/4">
        <div class="text-4xl flex items-center">
          <span>
            {{ person.name }}
          </span>
          <Base-Button buttonClass="bg-white ml-4">
            <template #icon>
              <img src="../../assets/icon/unLiked.svg" />
            </template>
          </Base-Button>
        </div>

        <div class="column">
          <div class="flex items-center mt-8">
            <img src="../../assets/icon/Monitor.svg" />
            <span class="ml-2">
              Participa de {{ person.episode.length }} episódios
            </span>
          </div>

          <div class="flex items-center mt-12">
            <div class="flex flex-items">
              <img
                src="../../assets/icon/Pulse.svg"
                alt="pulse"
                width="32"
                height="32"
              />
              <span class="pl-1">{{ person.status }}</span>
            </div>

            <div class="flex flex-items ml-3">
              <img
                src="../../assets/icon/Alien.svg"
                alt="Alien"
                width="32"
                height="32"
              />
              <span class="pl-1">{{ person.species }}</span>
            </div>

            <div class="flex flex-items ml-3">
              <img
                src="../../assets/icon/Planet.svg"
                alt="Planet"
                width="32"
                height="32"
              />
              <span class="pl-1">{{ person.origin.name }}</span>
            </div>
          </div>
        </div>

        <div class="flex justify-end">
          <Location
            :locationItems="{
              type: person.type ? person.type : '-',
              name: person.origin.name,
            }"
          />
          <Location
            class="ml-8"
            :locationItems="{
              type: person.location.name,
            }"
            icon="LocationMark"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../shared/BaseButton.vue";
import location from "../home/location.vue";
export default {
  name: "PersonInfo",
  props: {
    person: {
      required: true,
    },
  },
};
</script>

const fetchAbilities = async () => {
  await setTimeout(() => {
    //
  }, 100);
  return [
    {
      type: "BASIC",
      name: "Slow Orb",
      description:
        "Cast out a radianite orb that breaks into a slowing field upon impact with the ground.",
    },
    {
      type: "SIGNATURE",
      name: "Healing Orb",
      description:
        "Heal an ally or yourself to full health over a few seconds.",
    },
    {
      type: "BASIC",
      name: "Slow Orb",
      description:
        "Cast out a radianite orb that breaks into a slowing field upon impact with the ground.",
    },
    /*  {
      type: "SIGNATURE",
      name: "Healing Orb",
      desciption: "Heal an ally or yourself to full health over a few seconds.",
    }, */
  ];
};

export default {
  fetchAbilities,
};

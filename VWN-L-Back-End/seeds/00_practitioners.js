exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('practitioners').del()
    .then(function () {
      // Inserts seed entries
      return knex('practitioners').insert([
        {
          id: 1,
          name: "Janette Mikity",
          modality: 3,
          address: "435 N Park Avenue Breckenridge, CO 80424",
          phone: "970-331-5804",
          company: "Change.Care",
          lat: 39.490541,
          lng: -106.047806
        },
        {
          id: 2,
          name: "Anne McKeever",
          modality: 1,
          address: "12655 Black Forest Rd. Colorado Springs, CO 80908",
          phone: "719-424-0438",
          company: "Innovative Bodywork",
          lat: 39.014960,
          lng: -104.699940


        },
        {
          id: 3,
          name: "Mark Holmberg",
          modality: 1,
          address: "Denver,CO. Contact for address",
          phone: "303-819-0097",
          company: "Vital Touch LLC",
          lat: 39.7392,
          lng: -104.9903
        }, {
          id: 4,
          name: "Vince Bravdica",
          modality: 2,
          address: "Lakewood, CO. Contact for address",
          phone: "303-562-4801",
          company: "Mind’s Eye Hypnosis",
          lat: 39.7047,
          lng: -105.0814
        }, {
          id: 5,
          name: "Dawn Essig LMT, TTT",
          modality: 1,
          address: "12008 Melody Drive Westminster, CO 80234",
          phone: "303-918-5125",
          company: "Director of The Body Mechanic Veterans’ Wellness Network",
          lat: 39.914724,
          lng: -104.993639

        }, {
          id: 6,
          name: "Laura Golay LMT, CST",
          modality: 1,
          address: "Lakewood,CO",
          phone: "303-621-6761",
          company: "Mountain Muse Therapy",
          lat: 39.703074,
          lng: -105.084363
        }, {
          id: 7,
          name: "Jerry Munson",
          modality: 1,
          address: "1075 S Yukon Street Suite 320 Lakewood, CO 80226",
          phone: "303-919-6627",
          company: "Director of The Body Mechanic Veterans’ Wellness Network",
          lat: 39.697453,
          lng: -105.083043
        }, {
          id: 8,
          name: "Andrea Niece LMT and Yoga Instructor",
          modality: 1,
          address: "1075 S Yukon Street Suite 320 Lakewood, CO 80226",
          phone: "303-910-6156",
          company: " ",
          lat: 39.697635,
          lng: -105.083172
        } //, {
        //   id: 9,
        //   name: "Dawn Essig LMT, TTT",
        //   modality: 1,
        //   address: "1075 S Yukon Street Suite 320 Lakewood, CO 80226",
        //   phone: "303-918-5125",
        //   company: "Director of The Body Mechanic Veterans’ Wellness Network",
        //   lat: 39.697552,
        //   lng: -105.082955
        // }
      ]);
    }).then(() => {
      return knex.raw('ALTER SEQUENCE practitioners_id_seq RESTART WITH 10;');
    })
};
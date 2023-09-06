// export default interface AllVehicleData {
//   aantal_cilinders: string;
//   aantal_deuren: string;
//   aantal_rolstoelplaatsen: string;
//   aantal_wielen: string;
//   aantal_zitplaatsen: string;
//   afstand_hart_koppeling_tot_achterzijde_voertuig: string;
//   afstand_voorzijde_voertuig_tot_hart_koppeling: string;
//   api_gekentekende_voertuigen_assen: string;
//   api_gekentekende_voertuigen_brandstof: string;
//   api_gekentekende_voertuigen_carrosserie: string;
//   api_gekentekende_voertuigen_carrosserie_specifiek: string;
//   api_gekentekende_voertuigen_voertuigklasse: string;
//   breedte: string;
//   bruto_bpm: string;
//   catalogusprijs: string;
//   cilinderinhoud: string;
//   code_toelichting_tellerstandoordeel: string;
//   datum_eerste_tenaamstelling_in_nederland: string;
//   datum_eerste_tenaamstelling_in_nederland_dt: string;
//   datum_eerste_toelating: string;
//   datum_eerste_toelating_dt: string;
//   datum_tenaamstelling: string;
//   datum_tenaamstelling_dt: string;
//   eerste_kleur: string;
//   europese_voertuigcategorie: string;
//   export_indicator: string;
//   handelsbenaming: string;
//   inrichting: string;
//   jaar_laatste_registratie_tellerstand: string;
//   kenteken: string;
//   lengte: string;
//   massa_ledig_voertuig: string;
//   massa_rijklaar: string;
//   maximum_massa_samenstelling: string;
//   merk: string;
//   openstaande_terugroepactie_indicator: string;
//   plaats_chassisnummer: string;
//   taxi_indicator: string;
//   technische_max_massa_voertuig: string;
//   tellerstandoordeel: string;
//   tenaamstellen_mogelijk: string;
//   toegestane_maximum_massa_voertuig: string;
//   tweede_kleur: string;
//   type: string;
//   typegoedkeuringsnummer: string;
//   uitvoering: string;
//   variant: string;
//   vermogen_massarijklaar: string;
//   vervaldatum_apk: string;
//   vervaldatum_apk_dt: string;
//   voertuigsoort: string;
//   volgnummer_wijziging_eu_typegoedkeuring: string;
//   wacht_op_keuren: string;
//   wam_verzekerd: string;
//   wielbasis: string;
//   zuinigheidsclassificatie: string;
// }

// import { VehicleNL } from './Vehicle';

// export interface Vehicle {
//   licensePlate: string;
//   mark: string;
//   manufacturingYear: string;
// }

export default class AllVehicleData {
  aantal_cilinders: string;
  aantal_deuren: string;
  aantal_rolstoelplaatsen: string;
  aantal_wielen: string;
  aantal_zitplaatsen: string;
  afstand_hart_koppeling_tot_achterzijde_voertuig: string;
  afstand_voorzijde_voertuig_tot_hart_koppeling: string;
  api_gekentekende_voertuigen_assen: string;
  api_gekentekende_voertuigen_brandstof: string;
  api_gekentekende_voertuigen_carrosserie: string;
  api_gekentekende_voertuigen_carrosserie_specifiek: string;
  api_gekentekende_voertuigen_voertuigklasse: string;
  breedte: string;
  bruto_bpm: string;
  catalogusprijs: string;
  cilinderinhoud: string;
  code_toelichting_tellerstandoordeel: string;
  datum_eerste_tenaamstelling_in_nederland: string;
  datum_eerste_tenaamstelling_in_nederland_dt: string;
  datum_eerste_toelating: string;
  datum_eerste_toelating_dt: string;
  datum_tenaamstelling: string;
  datum_tenaamstelling_dt: string;
  eerste_kleur: string;
  europese_voertuigcategorie: string;
  export_indicator: string;
  handelsbenaming: string;
  inrichting: string;
  jaar_laatste_registratie_tellerstand: string;
  kenteken: string;
  lengte: string;
  massa_ledig_voertuig: string;
  massa_rijklaar: string;
  maximum_massa_samenstelling: string;
  merk: string;
  openstaande_terugroepactie_indicator: string;
  plaats_chassisnummer: string;
  taxi_indicator: string;
  technische_max_massa_voertuig: string;
  tellerstandoordeel: string;
  tenaamstellen_mogelijk: string;
  toegestane_maximum_massa_voertuig: string;
  tweede_kleur: string;
  type: string;
  typegoedkeuringsnummer: string;
  uitvoering: string;
  variant: string;
  vermogen_massarijklaar: string;
  vervaldatum_apk: string;
  vervaldatum_apk_dt: string;
  voertuigsoort: string;
  volgnummer_wijziging_eu_typegoedkeuring: string;
  wacht_op_keuren: string;
  wam_verzekerd: string;
  wielbasis: string;
  zuinigheidsclassificatie: string;

  constructor(
    aantal_cilinders: string,
    aantal_deuren: string,
    aantal_rolstoelplaatsen: string,
    aantal_wielen: string,
    aantal_zitplaatsen: string,
    afstand_hart_koppeling_tot_achterzijde_voertuig: string,
    afstand_voorzijde_voertuig_tot_hart_koppeling: string,
    api_gekentekende_voertuigen_assen: string,
    api_gekentekende_voertuigen_brandstof: string,
    api_gekentekende_voertuigen_carrosserie: string,
    api_gekentekende_voertuigen_carrosserie_specifiek: string,
    api_gekentekende_voertuigen_voertuigklasse: string,
    breedte: string,
    bruto_bpm: string,
    catalogusprijs: string,
    cilinderinhoud: string,
    code_toelichting_tellerstandoordeel: string,
    datum_eerste_tenaamstelling_in_nederland: string,
    datum_eerste_tenaamstelling_in_nederland_dt: string,
    datum_eerste_toelating: string,
    datum_eerste_toelating_dt: string,
    datum_tenaamstelling: string,
    datum_tenaamstelling_dt: string,
    eerste_kleur: string,
    europese_voertuigcategorie: string,
    export_indicator: string,
    handelsbenaming: string,
    inrichting: string,
    jaar_laatste_registratie_tellerstand: string,
    kenteken: string,
    lengte: string,
    massa_ledig_voertuig: string,
    massa_rijklaar: string,
    maximum_massa_samenstelling: string,
    merk: string,
    openstaande_terugroepactie_indicator: string,
    plaats_chassisnummer: string,
    taxi_indicator: string,
    technische_max_massa_voertuig: string,
    tellerstandoordeel: string,
    tenaamstellen_mogelijk: string,
    toegestane_maximum_massa_voertuig: string,
    tweede_kleur: string,
    type: string,
    typegoedkeuringsnummer: string,
    uitvoering: string,
    variant: string,
    vermogen_massarijklaar: string,
    vervaldatum_apk: string,
    vervaldatum_apk_dt: string,
    voertuigsoort: string,
    volgnummer_wijziging_eu_typegoedkeuring: string,
    wacht_op_keuren: string,
    wam_verzekerd: string,
    wielbasis: string,
    zuinigheidsclassificatie: string,
  ) {
    this.aantal_cilinders = aantal_cilinders;
    this.aantal_deuren = aantal_deuren;
    this.aantal_rolstoelplaatsen = aantal_rolstoelplaatsen;
    this.aantal_wielen = aantal_wielen;
    this.aantal_zitplaatsen = aantal_zitplaatsen;
    this.afstand_hart_koppeling_tot_achterzijde_voertuig = afstand_hart_koppeling_tot_achterzijde_voertuig;
    this.afstand_voorzijde_voertuig_tot_hart_koppeling = afstand_voorzijde_voertuig_tot_hart_koppeling;
    this.api_gekentekende_voertuigen_assen = api_gekentekende_voertuigen_assen;
    this.api_gekentekende_voertuigen_brandstof = api_gekentekende_voertuigen_brandstof;
    this.api_gekentekende_voertuigen_carrosserie = api_gekentekende_voertuigen_carrosserie;
    this.api_gekentekende_voertuigen_carrosserie_specifiek = api_gekentekende_voertuigen_carrosserie_specifiek;
    this.api_gekentekende_voertuigen_voertuigklasse = api_gekentekende_voertuigen_voertuigklasse;
    this.breedte = breedte;
    this.bruto_bpm = bruto_bpm;
    this.catalogusprijs = catalogusprijs;
    this.cilinderinhoud = cilinderinhoud;
    this.code_toelichting_tellerstandoordeel = code_toelichting_tellerstandoordeel;
    this.datum_eerste_tenaamstelling_in_nederland = datum_eerste_tenaamstelling_in_nederland;
    this.datum_eerste_tenaamstelling_in_nederland_dt = datum_eerste_tenaamstelling_in_nederland_dt;
    this.datum_eerste_toelating = datum_eerste_toelating;
    this.datum_eerste_toelating_dt = datum_eerste_toelating_dt;
    this.datum_tenaamstelling = datum_tenaamstelling;
    this.datum_tenaamstelling_dt = datum_tenaamstelling_dt;
    this.eerste_kleur = eerste_kleur;
    this.europese_voertuigcategorie = europese_voertuigcategorie;
    this.export_indicator = export_indicator;
    this.handelsbenaming = handelsbenaming;
    this.inrichting = inrichting;
    this.jaar_laatste_registratie_tellerstand = jaar_laatste_registratie_tellerstand;
    this.kenteken = kenteken;
    this.lengte = lengte;
    this.massa_ledig_voertuig = massa_ledig_voertuig;
    this.massa_rijklaar = massa_rijklaar;
    this.maximum_massa_samenstelling = maximum_massa_samenstelling;
    this.merk = merk;
    this.openstaande_terugroepactie_indicator = openstaande_terugroepactie_indicator;
    this.plaats_chassisnummer = plaats_chassisnummer;
    this.taxi_indicator = taxi_indicator;
    this.technische_max_massa_voertuig = technische_max_massa_voertuig;
    this.tellerstandoordeel = tellerstandoordeel;
    this.tenaamstellen_mogelijk = tenaamstellen_mogelijk;
    this.toegestane_maximum_massa_voertuig = toegestane_maximum_massa_voertuig;
    this.tweede_kleur = tweede_kleur;
    this.type = type;
    this.typegoedkeuringsnummer = typegoedkeuringsnummer;
    this.uitvoering = uitvoering;
    this.variant = variant;
    this.vermogen_massarijklaar = vermogen_massarijklaar;
    this.vervaldatum_apk = vervaldatum_apk;
    this.vervaldatum_apk_dt = vervaldatum_apk_dt;
    this.voertuigsoort = voertuigsoort;
    this.volgnummer_wijziging_eu_typegoedkeuring = volgnummer_wijziging_eu_typegoedkeuring;
    this.wacht_op_keuren = wacht_op_keuren;
    this.wam_verzekerd = wam_verzekerd;
    this.wielbasis = wielbasis;
    this.zuinigheidsclassificatie = zuinigheidsclassificatie;
  }

  // get vehicle(): Vehicle {
  //   return {
  //     licensePlate: this.kenteken,
  //     mark: this.merk,
  //     manufacturingYear: this.datum_eerste_toelating,
  //   };
  // }

  // get vehicleData(): {
  //   kenteken: string, merk: string, datum_eerste_toelating: string
  // } {
  //   // return {
  //   //   licensePlate: this.kenteken,
  //   //   mark: this.merk,
  //   //   manufacturingYear: this.datum_eerste_toelating,
  //   // };
  //   const { kenteken, merk, datum_eerste_toelating } = 
  // }

  get formData(): { name: string, ingredients: string, steps: string } {
    const { name, ingredients, steps } = this.recipe;
    return { name, ingredients, steps };
  }
}


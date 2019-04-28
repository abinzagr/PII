import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

class Conditions extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <ScrollView>
          <Text>
            Toute demande d'inscription au Site Web emporte acquisition
            automatique de la qualité de Utilisateurs WeekEat et acceptation des
            CGU. Les CGU ont pour objet de définir les termes et conditions de
            l'utilisation par les Utilisateurs WeekEat du Service à l'effet de
            faciliter leur mise en relation et d'organiser et réserver les
            Dîners. Tout Utilisateurs WeekEat doit être âgé de 18 ans révolus et
            jouir de sa pleine capacité juridique. Tout Utilisateurs WeekEat
            s'engage à fournir des informations exactes quant à son identité,
            adresse et autres données nécessaires à l'accès du Site Web et à
            mettre à jour toute modification concernant ces informations. La
            fourniture d'informations erronées, incomplètes, mensongères lors de
            l'inscription est susceptible d'engager la responsabilité du
            Utilisateurs WeekEat concerné tant à l'égard de WeekEat qu'à l'égard
            des autres Utilisateurs WeekEat. Toute personne naviguant sur le
            Site Web et tout Utilisateurs WeekEat naviguant et/ou s'identifiant
            sur le Site Web le font à leurs propres frais et au moyen de leurs
            propres équipements informatiques et de télécommunications. Les
            Utilisateurs WeekEat utilisent le Service sous leur propre
            responsabilité et sont seuls décisionnaires de l'organisation et de
            la réservation des Dîners, WeekEat n'intervenant qu'à l'effet de
            faciliter leur mise en relation. L'usage du service constitue une
            acceptation des CGU par les Utilisateurs WeekEat et constitue mandat
            donné à WeekEat pour mettre en relation Invités et Hôtes et opérer
            les transactions effectuées sur le Site Web selon les modalités
            ci-après définies. En l'absence d'utilisation de son compte par un
            Utilisateurs WeekEat pendant plus de douze (12) mois consécutifs,
            WeekEat pourra, si bon lui semble, procéder à la mise en veille
            dudit compte. Le Utilisateurs WeekEat concerné sera informé par
            WeekEat par courrier électronique. Le compte du Utilisateurs WeekEat
            pourra être réactivé suite à sa demande formulée à WeekEat, sous
            réserve pour le membre concerné de remplir les conditions
            d'inscription alors en vigueur. Le Utilisateurs WeekEat s'interdit
            d'utiliser, tant à des fins personnelles que pour compte de tiers,
            les informations nominatives et données personnelles auxquelles il
            aurait accès via le Site Web dans le cadre de l'utilisation du
            Service. Toute autre utilisation, à titre gratuit ou onéreux, sous
            quelque forme que ce soit, notamment mise à disposition gratuite,
            location, vente ou copie de la part d'un Utilisateurs WeekEat est
            expressément interdite et engage la responsabilité du Utilisateurs
            WeekEat concerné. WeekEat se réserve le droit de suspendre
            immédiatement ou de supprimer le compte du Membre ne respectant pas
            les CGU.
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  }
});

export default Conditions;

import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Searchbar, Avatar, Button, Divider } from 'react-native-paper';

export default function App() {

  const [searchQuery, setSearchQuery] = React.useState('');  
  const onChangeSearch = query => setSearchQuery(query);
  const frutas = { uri: "https://th.bing.com/th/id/OIP.gnavcsQWn0vbMjSqJgFQOgHaE7?pid=ImgDet&rs=1" };
  const remedios = { uri: "https://images.unsplash.com/photo-1542736667-069246bdbc6d?auto=format&fit=crop&w=1200&h=600" };

  return (
    <View style={styles.container}>
      <View style={styles.searchbarBox}>
          <Searchbar
            style={styles.searchbar}
            inputStyle={styles.searchbarInput}
            placeholder="Buscar capacitação, profissionais..."
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
      </View>
      <View style={styles.alertRow}>
        <Button icon='alert' color='#D6BB8E'></Button>
        <Text style={{width: '80%', color: '#D6BB8E', }}><Text style={{fontWeight: 'bold', color: '#D6BB8E',}}>Completar perfil:</Text> Preencha suas informações para encontrar pacientes.</Text>
      </View>
      <View style={styles.perfil}>
        <Text style={styles.title}>Seu perfil</Text>
          <View style={styles.row}>
            <View style={styles.avatarRow}>
              <Avatar.Icon style={styles.avatar} size={100} icon="account" color="#424F4D" />
            </View>
            <View style={styles.perfilRow}>
              <Text style={styles.perfilName}>Carolina Magalhães</Text>
              <Text style={styles.perfilLocate}>São Paulo - SP</Text>
              <View style={styles.rowStars}>
                <Button color="#6D7A78" icon="star" style={styles.stars}></Button> 
                <Button color="#6D7A78" icon="star" style={styles.stars}></Button>
                <Button color="#6D7A78" icon="star" style={styles.stars}></Button>
                <Button color="#6D7A78" icon="star" style={styles.stars}></Button>
                <Button color="#6D7A78" icon="star" style={styles.stars}></Button>                
                <Text style={styles.starsText}>(0)</Text>
              </View>              
            </View>
          </View> 
          <Divider />
          <View style={styles.rowLink}>
            <Text style={styles.linkPerfil}>Completar o perfil</Text><Text style={styles.arrowPerfil}>→</Text>       
          </View> 
      </View>
      <View>
        <View style={styles.trainingTitle}>
          <Text style={{ fontSize: 13 }}>Capacitações profissionais</Text>
          <Text style={{ fontSize: 13, color: '#07689F'}}>Ver mais</Text>
        </View>
      </View>
      <View style={styles.trainingCard}>
        <View style={styles.trainingList}>
          <ImageBackground source={frutas} resizeMode="cover" style={styles.imageTraining}>
            <Text style={[styles.textTrainingTop, {backgroundColor: '#D48A04'}]}>Parceiros</Text>
            <Text style={styles.textTrainingDown}>Diabetes: alimetos para evitar.</Text>
          </ImageBackground>
        </View>
        <View style={styles.trainingList}>
          <ImageBackground source={remedios} resizeMode="cover" style={styles.imageTraining}>
            <Text style={[styles.textTrainingTop, {backgroundColor: '#3B2D72'}]}>Capacitações</Text>
            <Text style={styles.textTrainingDown}>Como monistrar doses</Text>
          </ImageBackground>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  searchbarBox: {
    backgroundColor: '#006557',
    width: '100%',
    alignItems: 'center',
  },
  searchbar: {
    marginTop: 62,
    margin: '5%',
    width: '95%',    
  },
  searchbarInput:{
    fontSize: 12,
  },
  title: {
    fontSize: 20,
  },
  alertRow:{
    margin: '5%',
    borderRadius: 5,
    backgroundColor: '#F8F4C4',
    alignContent: 'center',
    flexDirection: 'row',    
    flexWrap: 'wrap',
    borderColor: '#D6BB8E',
    borderWidth: 1,
  },
  perfil: {
    margin: '5%',
  },
   avatarRow:{
    marginTop:'5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  perfilRow:{
    marginTop:'5%',
  },
  perfilName:{    
    margin: '1%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  perfilLocate:{
    margin: 5,
    marginBottom: '5%',
    fontSize: 10,
    color: '#6D7A78',
  },
  perfilStars:{
    margin: 5,
  },
  avatar:{
    marginTop: '5%',
    marginRight: 8,        
    backgroundColor: '#6D7A78',
  },
  stars:{
    marginHorizontal: -20,
  },
  starsText:{
    marginTop: '5%',
    marginLeft: '1%',
    fontSize: 10,
  },
  row: {
    flexDirection: 'row',    
    flexWrap: 'wrap',
    marginBottom: '5%',
  },
  rowLink: {
    flexDirection: 'row',    
    flexWrap: 'wrap',
    marginBottom: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowStars: {
    flexDirection: 'row',    
    flexWrap: 'wrap',
    marginLeft: 15,
  },
  linkPerfil:{
    marginTop: '5%',
    color: '#07689F',
  },
  arrowPerfil:{
    marginTop: 1,
    fontSize: 20,
    color: '#07689F',
  },
  trainingTitle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
  },
  trainingCard:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  trainingList:{
    margin: '5%',
    borderRadius: 5,
  },
  imageTraining: {
    resizeMode: 'stretch',
    overflow: 'hidden',
    borderRadius: 5,
    width: 200,
    height: 150,
  },
  textTrainingTop: {
    color: "white",
    fontSize: 10,
    textAlign: "center",
    backgroundColor: "#D48A04",
    width: 100,
    borderRadius: 5,
    margin: '5%',
  },
  textTrainingDown: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: 'left',
    position: 'absolute',
    bottom: '0',
    margin: '5%',
  },
});

//"Package.json" @React native, Snacks-Expo
//Before use this code, please install these package on the package.json.
/*{
  "dependencies": {
    "@expo/vector-icons": "^14.0.3",
    "react-native-paper": "4.9.2",
    "react-native-vector-icons": "10.2.0",
    "react-native-vector-icons/FontAwesome": "*"
  }
}
*/

import {React, useState} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

const stories = [
  { id: '1', user: '직장인', image: '	http://www.gotoyland.co.kr/shopimages/nooritoys1/0700000047963.jpg?03091232' },
  { id: '2', user: '학생', image: 'http://www.gotoyland.co.kr/shopimages/nooritoys1/0700000047953.jpg' },
  { id: '3', user: '과제', image: 'http://www.gotoyland.co.kr/shopimages/nooritoys1/0700000047943.jpg' },
  { id: '4', user: '나', image: 'http://www.gotoyland.co.kr/shopimages/nooritoys1/0700000047933.jpg' }
];

const upgraded_posts=[
  {
    user:"직장인",
    userid:"1",
    contents:[
      {id:'1', image: "https://mblogthumb-phinf.pstatic.net/MjAxODA1MTdfMjYw/MDAxNTI2NTQ3MjIyODcz.6JKRIjBA0IIOyoKXCL03IVSN90dgAroKXRS26bViETkg.ViU7ncuZfe6uyIgCTer2ax4CJ_gHv40XSZH4XtRdKkYg.JPEG.odeng2580/%EC%97%90%EC%84%B8%EC%9D%B4800.jpg?type=w800", caption: "출근하기 싫다", title:"#출근"},
      {id:'2', image: "https://kr-cdn.spooncast.net/profiles/b/QZ3bjbfnnvEK9/9524a240-9a66-4729-ba48-a9e63623f611.jpg", caption: "퇴근하고 싶다", title:"#퇴근"},
      {id:'3', image: "https://i.pinimg.com/1200x/1a/82/f8/1a82f8ed89c338d300963f60ed3bad2d.jpg", caption: "살려줘", title:"#월요병"}
    ]
  },
  {
    user:"학생",
    userid:"2",
    contents:[
      {id:'1', image: "https://img1.daumcdn.net/thumb/R1280x0/?fname=https://t1.daumcdn.net/brunch/service/user/doOX/image/SSZR7YDLlGOuhCDaFAN_V-Qk7T4.jpg", caption: "고딩까진 학원 대딩은 영어", title:"#공부"},
      {id:'2', image: "https://health.chosun.com/site/data/img_dir/2023/08/31/2023083102409_0.jpg", caption: "건강을 위해", title:"#운동"},
      {id:'3', image: "https://img.khan.co.kr/news/2024/01/19/news-p.v1.20240118.3b6227f718204e789395ac18afe4d7d7_P1.jpg", caption: "갓생을 살아가고 싶다", title:"#갓생"}
    ]
  },
  {
    user:"과제",
    userid:"3",
    contents:[
      {id:'1', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwN9wBzLENvsAgiyqpbunkMM4PCkgU_Tl7cg&s", caption: "19학점의 캡스톤은 무한한 과제!!", title:"#과제"},
      {id:'2', image: "https://masism.kr/wp-content/uploads/2017/11/t.jpg", caption: "살려줘", title:"#너무 #많아"},
      {id:'3', image: "https://i.namu.wiki/i/KfDJUtXaJr7l9QUg5z3wy-pQis_YpWr_r6Jad7pdYC2WnkppDynUpHpdvtTAiZF-zke52SN7l0meeaA8Zz6mjA.webp", caption: "...", title:"#살려줘"}
    ]
  },
  {
    user:"나",
    userid:"4",
    contents:[
      {id:'1', image: "https://www.amc.seoul.kr/healthinfo/health/attach/img/33635/20130319130944_0_33635.jpg", caption: "오전 7시 18분", title:"#지금은"},
      {id:'2', image: "https://i.namu.wiki/i/ZvOM833QHMYxXHj_JNJWS39N6I-6MBwyDcVJuEKxbckTbx6DxpaqKW7Z-FNPHHPZuiAkYd7FhPPjJ1bTe2iwM4sJ0WOgHDLIqUPGC__F9-g3tLou0piF7k-zlqXOzrhEcP3HembjrD787VQjLXjNLw.webp", caption: "지났어", title:"#오전 #6시"},
      {id:'3', image: "https://i.namu.wiki/i/jp_KZcXsmu5myZAG3ZSa_r6S3b2k8xo0BPixZUUNKPXhwNvUbamiDIH8jw0lZuMDI-O3WBaFnIK1rskzTU1KSWKJOzIyuy1jAT9GuBr4gwKnWNeNPB0Yu5azOym5d165PviFlB9e3HtsI0nfV62H3A.webp", caption: "살려줘", title:"#수면시간 #0"}
    ]
  }
]
const StoryButton = ({ user, image, onPress }) => (
  <TouchableOpacity onPress={onPress} >
    <Story user={user} image={image}/>
  </TouchableOpacity>
);
const Story = ({ user, image }) => (
  <View style={styles.story}>
    <Image source={{ uri: image }} style={styles.storyImage} />
    <Text style={styles.storyUser}>{user}</Text>
  </View>
);

const Post = ({ title, image, caption }) => (
  <View style={styles.post}>
    <View style={styles.header}>
      <Text style={styles.username}>{title}</Text>
    </View>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.caption}>{caption}</Text>
  </View>
);
const PostSet=({contents}) =>(
  <ScrollView horizontal>
    <FlatList
      data={contents}
      horizontal
      renderItem={({item})=> <Post title={item.title} image={item.image} caption={item.caption} />}
      keyExtractor={item => item.id}
    />
  </ScrollView>
);
function pressEventProcess(user,setPostData,selectedUser,selectUser){
  if(selectedUser!=user){
    setPostData([upgraded_posts.find(post=>post.user==user)])
    selectUser(user)
  }else{
    setPostData(upgraded_posts)
    selectUser(null)
  }
}
const App = () => {
  const [postData, setPostData]=useState(upgraded_posts);
  const [selectedUser,selectUser]=useState(null);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View>
          <Text style={{padding:5,paddingLeft:5, color:'blue', fontWeight:'bold', fontSize:30}}>
            <Icon name="star" size={30} color="#900"/>
              Jae stargram
            <Icon name="star" size={30} color="#900" />
          </Text>
        </View>

        <ScrollView style={styles.container}>
          {/* Stories Section */}
          <View style={styles.storiesContainer}>
            <FlatList
              data={stories}
              horizontal
              renderItem={({ item }) => <StoryButton user={item.user} image={item.image} onPress={()=>pressEventProcess(item.user,setPostData,selectedUser,selectUser)}/>}
              keyExtractor={item => item.id}
            />
          </View>
          {/* Posts Section */}
          <FlatList
            data={postData}
            renderItem={({ item }) => <PostSet user={item.user} contents={item.contents} />}
            keyExtractor={item => item.userid}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  storiesContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  story: {
    alignItems: 'center',
    marginRight: 10,
  },
  storyImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  storyUser: {
    marginTop: 5,
    fontSize: 12,
  },
  post: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode:"center"
  },
  caption: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
  },
});

export default App;
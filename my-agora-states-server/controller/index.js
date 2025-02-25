const { json } = require("express");
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send('TODO:')
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // res.send('TODO:')
    const {id} = req.params;
    const filtered = discussionsData.find((item) => item.id === parseInt(id));
    if(filtered){
      return res.status(200).json(filtered);
    }
    else{
    return res.status(404).json();    
    }
  }

};

module.exports = {
  discussionsController,
};

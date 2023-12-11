const ExperienceCard = ({obj}) => {
    function printTags() {
        let tags = "";
        for (let i = 0; i < obj.tags.length; i++) {
            tags += obj.tags[i] + " ";
        }
        return (
            <div>
                Tags: { tags }
            </div>
        )
    }

    return (
      <div>
        <div>The company is {obj.company}</div>
        <div>The role is {obj.role}</div>
        <div>Description: {obj.description[1]}</div>
        { printTags() }
        <br></br>
      </div>
    );
  };
  
  export { ExperienceCard };
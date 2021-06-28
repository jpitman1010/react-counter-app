import React, { Component } from 'react';
import { useEffect } from 'react';


class Counter extends Component {

    state = {
        count: 0,
        // tags: ['tag1', 'tag2', 'tag3']
        tags: []
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags.</p>;
        return    <ul> { this.state.tags.map(tag => <li key={tag}>{tag}</li>) }</ul>
    }

  render() {    
    return (
      <div>
          {/* //can also render condition without method by using truthy falsy from &&  */}
        { this.state.tags.length === 0 && "Please create a new tag!" }
        {/* //because it looks for true in first statement, the second statement as a string 
        //as long as not empty string, it counts as truthy, same with numbers.  As long as number not 
        //0, it identifies as truthy.  Then it will return the statement to the right most side of the && */}
        { this.renderTags() }
      </div>
  
    );
    }      
  
   
}

  export default Counter;
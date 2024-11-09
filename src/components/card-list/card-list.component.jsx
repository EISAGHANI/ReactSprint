import { Component } from "react";


class CardList extends Component {
    render(){
            const {monsters} = this.props
    return (
            <div className="card-list">
                {
                    monsters.map((monster) => {
                        const {name, id, email} = monster;
                        return(
                            <div>
                                <img 
                                    alt={`monster ${name}`}
                                    src={`https://robohash.org/${id}?set=set2&size=180x180`}

                                />
                                <h1>{name}</h1>
                                <p>{email}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
 
    }
    
}

export default CardList;
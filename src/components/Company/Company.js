import React, { Component } from 'react';
import { connect } from 'react-redux';
import { companyActions } from "../../_actions";

class Company extends Component {

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(companyActions.getAll());
    }
    render() {
        return (
            <div className="company">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box">
                            <div className="box-header with-border">
                                <h3 className="box-title">Filters</h3>
                            </div>

                            <div className="box-body">
                                <div className="row">
                                    
                                </div>
                            </div>

                            <div className="box-footer">
                                <div className="row">
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    login: state.login
})

const connectedCompanyPage = connect(mapStateToProps)(Company);
export { connectedCompanyPage as Company };
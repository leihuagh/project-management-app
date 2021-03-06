import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Card } from "../../../shared/components/Card";
import { ProjectForm } from "../../Home/components/ProjectForm";
import { withState } from "../../../shared/containers/withState";
import '../../../styles/routes/AddProjectButton.css';
import {withUserId} from "../../../shared/utils/localStorageUtil";

const initialState = {
  isProjectFormVisible: false,
};

const AddProjectButtonComponent = (props) => {
  const { state, setState, userId } = props;

  return (
    <React.Fragment>
      <Card className="add-project-btn">
        <div
          className="add-project-btn__inner-wrapper"
          onClick={() => setState(ss => ({...ss, isProjectFormVisible: true}))}
        >
          Add Project
        </div>
      </Card>

      {state.isProjectFormVisible &&
      <ProjectForm
        dismiss={() => setState(ss => ({...ss, isProjectFormVisible: false}))}
        userId={userId}
      />}
    </React.Fragment>
  );
};

export const AddProjectButton = compose(
  withUserId,
  withState(initialState)
)(AddProjectButtonComponent);

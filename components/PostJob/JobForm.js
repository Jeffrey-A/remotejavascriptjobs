import React from "react";
import _ from "lodash";
import dynamic from "next/dynamic";

import Pricing from "./Pricing";
import JobListing from "../JobBoard/JobListing";
import Checkout from "./Checkout";
import DropDown from "../JobBoard/Dropdown";
import {
  EMPLOYMENT_TYPE,
  DEVELOPMENT_TYPE,
  EXPERIENCE_LEVEL,
  SALARY_ESTIMATE,
  MAIN_TECHNOLOGY,
  ALLOW_IMAGE_FILE_TYPES,
} from "../JobBoard/data";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function RequiredIcon() {
  return <span className="required mx-2">*</span>
}

export default function JobForm(props) {
  const {
    jobTitle,
    company_name,
    jobDescriptionText,
    employment_type,
    development_type,
    experience_level,
    main_technology,
    salary,
    jobDescription,
    onSubmit,
    onInputChange,
    onDropdownChange,
    onJobPostingTypeChange,
    onEditorStateChange,
    isFeaturedPosting,
    onFileChange,
    logo_url,
  } = props;

  const test = {
    id: '1',
    logo_url,
    title: jobTitle,
    employment_type,
    experience_level,
    development_type,
    description: jobDescriptionText,
    company_name,
    salary,
    main_technology,
    is_featured: isFeaturedPosting,
  };

  return (
    <form className="mb-5 sectionShadow p-3 p-md-5" onSubmit={onSubmit}>
      <div id="create" className="anchor"></div>
      <h2 className="pb-4">1. Create</h2>
      <h5 className="pb-3">Position Details</h5>
      <div className="mb-3">
        <label htmlhtmlFor="title" className="form-label">
          Job Title <RequiredIcon />
        </label>
        <input
          onChange={onInputChange}
          type="text"
          className="form-control dropdown-filter"
          name="title"
          id="title"
        />
      </div>

      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <label htmlhtmlFor="formGroupExampleInput" className="form-label">
            Employment Type <RequiredIcon />
          </label>
          <DropDown
            onClick={onDropdownChange}
            {...EMPLOYMENT_TYPE}
            label={employment_type}
          />
        </div>
        <div className="col-12 col-md-6 mb-3">
          <label htmlhtmlFor="formGroupExampleInput" className="form-label">
            Development Type <RequiredIcon />
          </label>
          <DropDown
            {...DEVELOPMENT_TYPE}
            onClick={onDropdownChange}
            label={development_type}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <label htmlhtmlFor="formGroupExampleInput" className="form-label">
            Experience
          </label>
          <DropDown
            {...EXPERIENCE_LEVEL}
            onClick={onDropdownChange}
            label={experience_level}
          />
        </div>
        <div className="col-12 col-md-6 mb-3">
          <label htmlhtmlFor="formGroupExampleInput" className="form-label">
            Salary Estimate <RequiredIcon />
          </label>
          <DropDown
            {...SALARY_ESTIMATE}
            onClick={onDropdownChange}
            label={salary}
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlhtmlFor="formGroupExampleInput2" className="form-label">
          Main Technology <RequiredIcon />
        </label>
        <DropDown
          {...MAIN_TECHNOLOGY}
          onClick={onDropdownChange}
          label={main_technology}
        />
      </div>
      <div className="mb-3">
        <label htmlhtmlFor="formGroupExampleInput2" className="form-label">
          Job Description <RequiredIcon />
        </label>
        {/* DOCS: https://jpuri.github.io/react-draft-wysiwyg/#/docs */}
        <Editor
          editorState={jobDescription}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          toolbar={{
            options: ['inline', 'blockType', 'list', 'textAlign', 'colorPicker', 'link', 'emoji', 'image', 'remove', 'history' ],
            inline: { inDropdown: true },
            // list: { inDropdown: true },
            // textAlign: { inDropdown: true },
            // link: { inDropdown: true },
            // history: { inDropdown: true },
        }}
        />
      </div>
      <div className="mb-3">
        <label htmlhtmlFor="apply_link" className="form-label">
          Apply Link or Email <RequiredIcon />
        </label>
        <input
          onChange={onInputChange}
          type="text"
          className="form-control dropdown-filter"
          name="apply_link"
          id="apply_link"
        />
      </div>
      <h5 className="pt-5 pb-3">Company Details</h5>
      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <label htmlhtmlFor="company_name" className="form-label">
            Company Name <RequiredIcon />
          </label>
          <input
            type="text"
            className="form-control dropdown-filter"
            name="company_name"
            id="company_name"
            onChange={onInputChange}
          />
        </div>
        <div className="col-12 col-md-6 mb-3">
          <label htmlhtmlFor="company_email" className="form-label">
            Company Email <RequiredIcon />
          </label>
          <input
            type="text"
            className="form-control dropdown-filter"
            id="company_email"
            name="company_email"
            onChange={onInputChange}
          />
          <p className="u-info-text">It&apos;s kept private. A receipt and confirmation email will be sent to this email.</p>
        </div>
      </div>
      <div className="mb-3">
        <label htmlhtmlFor="company_site" className="form-label">
          Company Website URL
        </label>
        <input
          type="text"
          className="form-control dropdown-filter"
          id="company_site"
          name="company_site"
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlhtmlFor="formFile" className="form-label">
          Company Logo <RequiredIcon />
        </label>
        <input onChange={onFileChange} className="form-control dropdown-filter" type="file" id="formFile" accept={_.join(ALLOW_IMAGE_FILE_TYPES, ', ')} />
      </div>
      <Pricing
        isFeaturedPosting={isFeaturedPosting}
        onJobPostingTypeChange={onJobPostingTypeChange}
      />
      {/* { test.title && ( */}
        <div className="mb-5 job-card-container">
          <JobListing isPreview jobs={[test]} /> 
        </div>
      {/* )} */}
      <div className="mb-3">{/* <JobListing jobs={[jobs[0]]} /> */}</div>
      <Checkout  isFeaturedPosting={isFeaturedPosting} onInputChange={onInputChange} />
    </form>
  );
}

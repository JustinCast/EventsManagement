import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DialogManagerService } from "src/app/services/dialog-manager.service";
import { Degree } from "src/app/models/Degree";
import { Instructor } from "src/app/models/instructor";
import { InstructorService } from "src/app/services/instructor.service";
import { HttpErrorResponse } from "@angular/common/http";
import { ActivityService } from "src/app/services/activity.service";

@Component({
  selector: "app-add-instructor",
  templateUrl: "./add-instructor.component.html",
  styleUrls: ["./add-instructor.component.scss"]
})
export class AddInstructorComponent implements OnInit {
  instructorGroup: FormGroup;
  degrees: Array<Degree> = [];
  constructor(
    private _fb: FormBuilder,
    private _dialog: DialogManagerService,
    private _instructor: InstructorService,
    private _activity: ActivityService
  ) {
    this.instructorGroup = this._fb.group({
      name: ["", Validators.required],
      lastname: ["", Validators.required],
      dni: ["", Validators.required],
      gender: ["", Validators.required],
      country: ["", Validators.required],
      state: ["", Validators.required],
      phone: ["", Validators.required],
      passport: ["", Validators.required],
      mail: ["", Validators.required],
      description: ["", Validators.required],
      id_activity: ["", Validators.required]
    });
  }

  ngOnInit() {
    if(this._activity.activities.length === 0)
      this._activity.getActivities();
  }

  openAddDegree() {
    this._dialog.openAddDegreeDialog().subscribe(degree => {
      if (degree) this.degrees.push(degree);
    });
  }

value(val: any) {
  console.log(val);
}

  onSubmit() {
    console.log(this.instructorGroup.get("id_activity").value);
    let instructor: Instructor = new Instructor(
      this.instructorGroup.get("name").value,
      this.instructorGroup.get("lastname").value,
      this.instructorGroup.get("gender").value,
      this.instructorGroup.get("country").value,
      this.instructorGroup.get("state").value,
      this.instructorGroup.get("phone").value,
      this.instructorGroup.get("passport").value,
      this.instructorGroup.get("mail").value,
      this.instructorGroup.get("description").value,
      this.instructorGroup.get("dni").value,
      this.instructorGroup.get("id_activity").value
    );
    this._instructor.saveInstructor(instructor)
    .subscribe(
      (id) => {
        this._instructor.ui.openSnackBar("Instructor guardado con éxito", "Ok", 2000); 
        this._instructor.loading = false;
        this.degrees.forEach(d => {
          d.id_instructor = id;
          this._instructor.saveGrade(d);
        });
      },
      (err: HttpErrorResponse) => this._instructor.handleError(err)
    );
  }
  allcountries: Array<string> = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas, The",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burma",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cabo Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo, Democratic Republic of the",
    "Congo, Republic of the",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Curacao",
    "Cyprus",
    "Czechia",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Holy See",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "Norway",
    "Pakistan",
    "Palau",
    "Palestinian Territories",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland (See Eswatini)",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
  ];
}

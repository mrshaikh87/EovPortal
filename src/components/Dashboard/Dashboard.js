import React, { useState } from 'react';
import './Dashboard.css';
import { Box, Typography, Paper, TextField, Button, Collapse, IconButton, Avatar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { blue, blueGrey } from '@mui/material/colors';


const Dashboard = () => {
  const [expandedSections, setExpandedSections] = useState({
    project: false,
    personalDetails: false,
    certifications: false,
  });

  const [showAddressToggle, setShowAddressToggle] = useState(false); // Add state for the toggle

  const handleExpandClick = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleAddressToggle = () => {
    setShowAddressToggle((prev) => !prev); // Toggle current and permanent address visibility
  };

  const theme = useTheme();

  return (
    <div className="dashboard-container" fullWidth>
      {/* New Header */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#E4E4E4' }}>
          <Toolbar>
            {/* Logo Image */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src="EOV-ORIGINAL.webp" alt="EOV Logo" style={{ height: '40px' }} />
            </Box>
            {/* Title */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 2 }}>
            </Typography>
            {/* Logout Button */}
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Profile Section */}
            <Box display="flex" justifyContent="space-between" className="profile-section" padding={2}>
            <Card
            sx={{
              display: 'flex',
              width: '50%',
              height: '236px',
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Background Gradient */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                background: `linear-gradient(to bottom right, #e6f3ff, #b3d9ff, #80c1ff)`, // Blue gradient background
                zIndex: 0,
              }}
            />

            {/* Profile Section */}
            <Box sx={{ zIndex: 1, padding: '16px' }}>
              <Avatar
                alt="Kishor Pawar"
                src="/profile.jpg" // Update the image path as per your setup
                sx={{
                  width: 80,
                  height: 80,
                  border: '3px solid white',
                  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                }}
              />
            </Box>

            {/* Information Section */}
            <Box
              sx={{
                zIndex: 1,
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '16px',
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 'bold',
                    color: '#333',
                  }}
                >
                  Kishor Pawar
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#555' }}>
                  Job Title: UX Designer
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#555' }}>
                  Department: UX
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#555' }}>
                  Employee ID: EOV0020
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#555' }}>
                  EOV Mentor Name: Dinesh Sonsale
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#555' }}>
                  Experience: 2 Years 8 Months
                </Typography>
              </CardContent>
            </Box>

            {/* Edit Button */}
                  <Box
              sx={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 2,
              }}
            >
              <button
                style={{
                  backgroundColor: '#34b5ff',
                  color: 'white',
                  fontWeight: 600,
                  padding: '8px 12px', // Reduced padding
                  marginTop: '8px',
                  borderRadius: '5px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Edit
              </button>
            </Box>

          </Card>


              {/* Important Link */}
              <Card
        sx={{
          display: 'flex',
          width: '50%',
          height: '236px',
          borderRadius: '12px',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Background Design */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            height: '100%',
            width: '50%',
            background: 'linear-gradient(to bottom left, #ffe6cc, #ffcc99)',
            borderTopLeftRadius: '50%',
            borderBottomLeftRadius: '50%',
          }}
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', zIndex: 1, flex: 1 }}>
          <CardContent sx={{ flex: '1 0 auto', padding: '16px' }}>
            {/* Header */}
            <Typography variant="h6" component="div" sx={{ color: '#555', fontWeight: 'bold' }}>
              Important Link
            </Typography>

            {/* Link Section */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '8px 0',
                gap: '12px', // Space between logo and text
              }}
            >
              {/* Larger Logo */}
              <img
                src="/keka-removebg-preview.png" // Ensure this image is in the public folder
                alt="KEKA links"
                style={{
                  width: '50px', // Increased size
                  height: '50px',
                  marginRight: '8px',
                }}
              />
              {/* Text */}
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: '#007bff', fontWeight: 'bold' }} // Blue text color for link
              >
                EOV Keka
              </Typography>
            </Box>

            {/* Description */}
            <Typography
              variant="body2"
              component="div"
              sx={{
                color: '#555',
                marginTop: '12px',
                lineHeight: '1.5',
              }}
            >
              Click the link above to access all essential resources and tools,
              including Attendance and Leave Management, Holidays, HR inquiries,
              payroll updates, referrals, and much more.
            </Typography>
          </CardContent>
        </Box>

        {/* Optional Image Section */}
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="/keka-removebg-preview.png" // Replace with the actual image path
          alt="Optional Image"
        />
      </Card>
      </Box>

      {/* Project Section */}
      
      <Box padding={4}>
      <Paper elevation={3} className="project-section" style={{ padding: '20px', marginTop: '20px' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Project</Typography>
        <IconButton onClick={() => handleExpandClick('project')}>
          <ExpandMoreIcon className={expandedSections.project ? 'expand-open' : 'expand-close'} />
        </IconButton>
      </Box>
      <Collapse in={expandedSections.project} timeout="auto" unmountOnExit>
        <Box className="project-form">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body1" style={{ fontWeight: 'bold' }}>Project Name</Typography>
            <TextField
              name="projectName"
              value={projectData.projectName}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
          </Box>
          
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>Role in Project</Typography>
          <TextField
            name="roleInProject"
            value={projectData.roleInProject}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
          />

          <Typography variant="body1" style={{ fontWeight: 'bold' }}>Project Manager</Typography>
          <TextField
            name="projectManager"
            value={projectData.projectManager}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
          />

          <Typography variant="body1" style={{ fontWeight: 'bold' }}>Project Description</Typography>
          <TextField
            name="projectDescription"
            value={projectData.projectDescription}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
            multiline
            rows={4}
          />

          <Box display="flex" justifyContent="space-between" gap={2}>
            <Box>
              <Typography variant="body1" style={{ fontWeight: 'bold' }}>Start Date</Typography>
              <TextField
                name="startDate"
                type="date"
                value={projectData.startDate}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            <Box>
              <Typography variant="body1" style={{ fontWeight: 'bold' }}>End Date</Typography>
              <TextField
                name="endDate"
                type="date"
                value={projectData.endDate}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Box>
          </Box>

          <Typography variant="body1" style={{ fontWeight: 'bold' }}>Tools and Tech</Typography>
          <TextField
            name="toolsTech"
            value={projectData.toolsTech}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
          />

          <Box display="flex" justifyContent="space-between" gap={2}>
            <Button
              style={{
                backgroundColor: '#2889D7',
                color: 'white',
                fontWeight: 600,
                padding: '8px 12px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={handleSave}
            >
              Save
            </Button>
            <Button
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                fontWeight: 600,
                padding: '8px 12px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={handleAddNewProject}
            >
              Add New Project
            </Button>
          </Box>
        </Box>
      </Collapse>
    </Paper>


      <Paper elevation={3} className="certifications-section" style={{ padding: '20px', marginTop: '20px' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Certifications</Typography>
          <IconButton onClick={() => handleExpandClick('certifications')}>
            <ExpandMoreIcon className={expandedSections.certifications ? "expand-open" : "expand-close"} />
          </IconButton>
        </Box>
        <Collapse in={expandedSections.certifications} timeout="auto" unmountOnExit>
          <Box className="certifications-form">
            <TextField label="Certification Name" variant="outlined" fullWidth margin="normal" disabled />
            <TextField label="Issued By" variant="outlined" fullWidth margin="normal" disabled />
            <TextField label="Issue Date" type="date" InputLabelProps={{ shrink: true }} variant="outlined" fullWidth margin="normal" disabled />
            <TextField label="Validity" variant="outlined" fullWidth margin="normal" disabled />
            {/* Save Button */}
            <Box display="flex" justifyContent="flex-start" marginTop="20px">
              <Button 
                variant="contained" 
                style={{ backgroundColor: '#2889D7', color: 'white' }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Collapse>
      </Paper>



      </Box>
     

{/* Personal Details Section */}
{/* <Paper elevation={3} className="personal-details-section" style={{ padding: '20px', marginTop: '20px' }}>
  <Box display="flex" justifyContent="space-between" alignItems="center">
    <Typography variant="h6">Personal Details</Typography>
    <IconButton onClick={() => handleExpandClick('personalDetails')}>
      <ExpandMoreIcon className={expandedSections.personalDetails ? "expand-open" : "expand-close"} />
    </IconButton>
  </Box>
  <Collapse in={expandedSections.personalDetails} timeout="auto" unmountOnExit>
    <Box className="personal-form">
      <TextField label="Full Name" variant="outlined" fullWidth margin="normal" disabled />
      <TextField label="Email" variant="outlined" fullWidth margin="normal" disabled />
      <TextField label="Phone Number" variant="outlined" fullWidth margin="normal" disabled />
      <TextField label="Current Address" variant="outlined" fullWidth margin="normal" disabled />
      <TextField label="Permanent Address" variant="outlined" fullWidth margin="normal" disabled />
      <TextField label="Emergency Contact" variant="outlined" fullWidth margin="normal" disabled />
    </Box>
  </Collapse>
</Paper> */}

{/* Certifications Section */}

    </div>
  );
};

export default Dashboard;

#ifndef __GPSWaypoint
#define __GPSWaypoint
class GPSWaypoint
{
public:
 float longitude;
 float latitude;
 char* n_or_s;
 char* e_or_w;
 float speed;
 int has_fix;

 GPSWaypoint();
 ~GPSWaypoint();
};
#endif
